require 'rails_helper'

class RequestForm
  include Capybara::DSL
  def visit_form
    visit('/request_form')
  end

  def visit_admin
    visit('/bookings')
  end
end

feature "Visit request form" do
  let(:request_form) {RequestForm.new}

  scenario "Successfully submit form", :js => true do
    #confirm entry is in admin view
    request_form.visit_admin
    expect(page).to have_content("Animal Sitting Requests")
    expect(page).not_to have_content("Joe")
    expect(page).not_to have_content("Bob")

    #fill out request form and submit
    request_form.visit_form
    expect(page).to have_content("Animal Sitting Request Form")
    fill_in 'Date of Service', with: Date.today+1.day
    fill_in 'First Name', with: 'Joe'
    fill_in 'Last Name', with: 'Bob'
    fill_in 'Animal Name', with: 'Archie'
    within('div.ant-select-selector') do
        find('span.ant-select-selection-wrap').click
    end
    within('div.ant-select-dropdown') do
        find('div#animal_type_dog', text: "Dog").click
    end
    fill_in 'Sitting Duration', with: 3
    expect(page).to have_content("$50")
    click_button 'Submit'
    expect(page).to have_content("Confirm your request")
    click_button 'OK'
    expect(page).to have_content("LoadUp Animal Sitting")

    #confirm entry is in admin view
    request_form.visit_admin
    expect(page).to have_content("Animal Sitting Requests")
    expect(page).to have_content("Joe")
    expect(page).to have_content("Bob")
    expect(page).to have_content("Archie")
    expect(page).to have_content("dog")
    expect(page).to have_content("3")
    expect(page).to have_content("$50")
  end

  scenario "Submit without content, see form validation errors", :js => true do
    request_form.visit_form
    expect(page).to have_content("Animal Sitting Request Form")
    click_button 'Submit'

    expect(page).to have_content("Please input your first name!")
    expect(page).to have_content("Please input your last name!")
    expect(page).to have_content("Please input the name of your animal!")
    expect(page).to have_content("Please select the type of your animal!")
    expect(page).to have_content("Please select an amount of hours between 2 and 8")
    expect(page).to have_content("Please select a date for your request!")
  end

  scenario "Dynamic price, see price update with form changes", :js => true do
    request_form.visit_form
    within('div.ant-select-selector') do
        find('span.ant-select-selection-wrap').click
    end
    within('div.ant-select-dropdown') do
        find('div#animal_type_dog', text: "Dog").click
    end
    fill_in 'Sitting Duration', with: 3
    expect(page).to have_content("$50")
    fill_in 'Sitting Duration', with: 8
    expect(page).to have_content("$100")
  end

  # need a spec to handle error on failed submission because of error on create
end