require 'rails_helper'

RSpec.describe App, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"


  context "has class methods" do
    app_class = App

    it "has scope by_position" do
      expect(app_class).to respond_to(:by_position)
    end

    it "has scope by_newest" do
      expect(app_class).to respond_to(:by_newest)
    end

    it "has scope unpublished" do
      expect(app_class).to respond_to(:unpublished)
    end

    it "has scope published" do
      expect(app_class).to respond_to(:published)
    end
  end


  context "has instance methods" do
    app = App.new

    it "has attribute name" do
      expect(app).to respond_to(:name)
    end

    it "has attribute url" do
      expect(app).to respond_to(:url)
    end

    it "has attribute description" do
      expect(app).to respond_to(:description)
    end
    
    it "has attribute image_path" do
      expect(app).to respond_to(:image_path)
    end

    it "has attribute published" do
      expect(app).to respond_to(:published)
    end

    it "has attribute position" do
      expect(app).to respond_to(:position)
    end

    it "has instance method neat_url" do
      expect(app).to respond_to(:neat_url)
    end

    it "neat_url to yield a neat url" do
      app.url = "http://google.com"
      expect(app.neat_url).to eq("google.com")
    end
  end

end
