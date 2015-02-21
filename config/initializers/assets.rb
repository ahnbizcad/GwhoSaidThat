# Manifest files
# Not technically manifests
#Rails.application.config.assets.precompile += ['bookshelf.js', 'bookshelf.scss']

# Searches /assets/ /lib/ /vendor/ by default

# Images
Rails.application.config.assets.precompile << /\.(?:png|jpg|jpeg|gif)\z/

# Fonts
Rails.application.config.assets.precompile << /\.(?:eot|svg|ttf|woff|woff2)\z/

# Iframe content for bookshelf
Rails.application.config.assets.precompile << /\.(?:html)\z/
