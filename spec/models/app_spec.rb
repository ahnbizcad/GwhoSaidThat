require 'rails_helper'

RSpec.describe App, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"


  it ".by_position" do
    expect(App).to respond_to(:by_position)
  end

  it ".by_newest" do
    expect(App).to respond_to(:by_newest)
  end

  it ".unpublished" do
    expect(App).to respond_to(:unpublished)
  end

  it ".published" do
    expect(App).to respond_to(:published)
  end


  context "has instance methods" do
    before(:each) { app = App.new }

    it "#name" do
      expect(app).to respond_to(:name)
    end

    it "#url" do
      expect(app).to respond_to(:url)
    end

    it "#description" do
      expect(app).to respond_to(:description)
    end
    
    it "#image_path" do
      expect(app).to respond_to(:image_path)
    end

    it "#published" do
      expect(app).to respond_to(:published)
    end

    it "#position" do
      expect(app).to respond_to(:position)
    end

    it "#neat_url" do
      expect(app).to respond_to(:neat_url)
    end

    it "neat_url to yield a neat url" do
      app.url = "http://google.com"
      expect(app.neat_url).to eq("google.com")
    end
  end

end
