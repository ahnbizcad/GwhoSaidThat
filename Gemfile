source 'https://rubygems.org'

ruby '2.0.0'
gem 'rails', '4.1.1'
gem 'pg', '0.17.1'

#gem 'html2haml' # Used for converting existing files
#gem 'haml2slim' # Used for converting existing files
gem 'slim-rails', '~> 3.0.1'

gem 'sass-rails', '~> 4.0.2'
gem 'bootstrap-sass', '~> 3.2.0'

gem 'coffee-rails'
gem 'jbuilder', '~> 2.0'
gem 'jquery-rails'

gem 'turbolinks'
gem 'jquery-turbolinks', '~>2.0.2'

gem 'uglifier', '>= 1.3.0'

gem 'sprockets-rails', :require => 'sprockets/railtie'

group :doc do
  gem 'sdoc', '~> 0.4.0'
end

gem 'figaro', '~> 1.1.0'
gem 'devise'

gem 'simple_form', '~> 3.1.0.rc1'
#gem 'compass'
#gem 'bourbon'
gem 'font-awesome-rails'
gem 'i18n'
gem 'nokogiri'  #html, xml, sax, reader and css parser

#gem 'acts_as_taggable_on'
gem 'acts_as_list'

#gem 'kaminari'

#gem 'image_size', '~> 1.3.1'
#gem 'fastimage', '~> 1.6.4'

#gem 'filepicker-rails'


group :development do 
  gem 'ruby_parser'

  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'pry-rails'
  gem 'pry-byebug'

  gem 'awesome_print'
  gem 'quiet_assets'

  gem 'annotate'

  #gem 'meta_request' # rails panel - dev inspector in chrome. 
                      # download chrome extension

  #gem 'bullet'       # n+1 detection # Don't need because don't have associations for this app.
  #gem 'peek'         # query times?
  #gem 'newrelic_rpm' #vquery times?
  
  gem 'spring-commands-rspec'   # spring commands to work with rspec
  gem "spring-commands-cucumber"

end

group :development, :test do
  gem 'rspec-rails', '~> 3.2.0' # for rspec-core, rspec-expectations, rspec-mocks
  gem 'rspec-activemodel-mocks' # mock_model and stub_model methods to not hit db

  gem 'guard-rspec'             # automatically runs tests when changes are saved
  
  # Spring gem (application preloader) is built into Rails 4.1+.
  #gem 'zeus'  #alternative to Spring that's compatible with parallel-tests gem.
  #gem 'parallel-tests'

  gem 'factory_girl_rails' # replaces fixtures
  gem 'faker', '~> 1.4.3'    # generate values.
  #gem 'rb-fsevent'  #notifications for Mac OSX. Guard has notifications by default for other OSs.
end

group :test do
  gem 'cucumber-rails', require: false
  gem 'capybara', '~> 2.4.4' # mimics users. acceptance test framework. OK with or without cucumber.
  #selenium     #flexible, slower
  #poltergeist  #fast, simpler

  gem 'shoulda', '~> 3.5.0'  # more rspec matchers for rails
  
  #gem 'launchy'  # launches browser when an example fails.
end

group :production do 
  gem 'rails_12factor'
end

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
#gem 'tzinfo-data', platforms: [:mingw, :mswin]
