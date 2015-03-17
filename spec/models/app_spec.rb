# == Schema Information
#
# Table name: apps
#
#  id          :integer          not null, primary key
#  created_at  :datetime
#  updated_at  :datetime
#  url         :string(255)
#  description :text
#  published   :boolean          default(FALSE)
#  image_path  :string(255)
#  name        :string(255)      default(""), not null
#  position    :integer
#

require 'rails_helper'
#RSpec.describe mock_model('App')  instead of App ? #-> undefined method
RSpec.describe App, type: :model do

  it "has a valid factory" do
    app = FactoryGirl.build(:app)
    expect(app).to be_valid
  end

  it { is_expected.to validate_presence_of(:url) }
  # Should I use mock_model in place of the class itself 
  # when testing class methods? what about active record relations?
  # What is the return value of mock, an instance or the class?

  # I thought mocks required an assertion also... but mock_model is used like a factory...

  # How to verify if mock_model method is available from rspec-rails, 
  # or if rspec-activemodel-mocks gem is required?

  context "when sent instance method messages" do
    it { expect(App).not_to respond_to(:description) }
    it { expect(App).not_to respond_to(:url) }
  end

  describe ".by_position" do 
    it { expect(App).to respond_to(:by_position) }
    
    let!(:sorted_apps) do
      @one   = FactoryGirl.create :app, position: 1
      @two   = FactoryGirl.create :app, position: 2
      @three = FactoryGirl.create :app, position: 3
    end
    
    it "returns sorted by position ASC" do 
      expect(App.by_position).to match_array([@one, @two, @three])
      # how to use appropriate matcher for activerecord object?
      # mock or stub active record modeels? mock_model?
      # how to code more complex arguments for ".and_returns"?
    end

    after do
      @one.destroy
      @two.destroy
      @three.destroy
    end
  end

  describe ".by_newest" do
    it { expect(App).to respond_to(:by_newest) }
    
    let!(:sorted_apps) do
      @one   = FactoryGirl.create :app
      @two   = FactoryGirl.create :app
      @three = FactoryGirl.create :app
    end
    
    it "returns apps sorted by created_at DESC" do
      expect(App.by_newest).to eq([@three, @two, @one])
    end

    after do
      @one.destroy
      @two.destroy
      @three.destroy
      # faster way to clear?
    end
  end

  describe ".unpublished" do
    it { expect(App).to respond_to(:unpublished) }

    it "returns only unpublished apps"
  end

  describe ".published" do
    it { expect(App).to respond_to(:published) }

    it "returns only published apps"
  end


  context "a new app" do
    let!(:app) { FactoryGirl.build :app }
    subject { app }

    describe "#name" do
      it { is_expected.to respond_to(:name) }
    end

    describe "#url" do
      it { is_expected.to respond_to(:url) }
    end

    describe "#description" do
      it { is_expected.to respond_to(:description) }
    end
    
    describe "#image_path" do
      it { is_expected.to respond_to(:image_path) }
    end

    describe "#published" do
      it { is_expected.to respond_to(:published) }
    end

    describe "#position" do
      it { is_expected.to respond_to(:position) }
    end

    describe "#neat_url" do
      it { is_expected.to respond_to(:neat_url) }

      it "yields a #neat_url" do
        expect(app.neat_url).to_not match(/.*(:\/\/).*/)
      end
    end

  end


end
