require 'rails_helper'

RSpec.describe "Apps", type: :request do
  
  context "GET /apps" do
    it "works! (now write some real specs)" do
      get apps_path
      expect(response).to have_http_status(200)
    end
  end

end
