# Manifest files
# Not technically manifests
#Rails.application.config.assets.precompile += ['bookshelf.js', 'bookshelf.scss']


# Images
Rails.application.config.assets.precompile << /\.(?:png|jpg|jpeg|gif)\z/

# Fonts
Rails.application.config.assets.paths << Rails.root.join('vendor', 'assets', 'fonts')  
Rails.application.config.assets.precompile << /\.(?:eot|svg|ttf|woff)\z/

# Iframe content for bookshelf
Rails.application.config.assets.precompile << /\.(?:html)\z/