# Manifest files
# Not technically manifests
#Rails.application.config.assets.precompile += ['bookshelf.js', 'bookshelf.scss']


# Images
Rails.application.config.assets.precompile << /\.(?:png|jpg|jpeg|gif)\z/

# Fonts
Rails.application.config.assets.precompile << /\.(?:svg|eot|woff|ttf)\z/

# Iframe content for bookshelf
Rails.application.config.assets.precompile << /\.(?:html)\z/