json.array!(@apps) do |app|
  json.extract! app, :id, :url
  json.url app_url(app, format: :json)
end
