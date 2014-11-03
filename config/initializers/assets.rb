# Manifest files
#Rails.application.config.assets.precompile += ['bookshelf.js', 'bookshelf.css']

# Images
Rails.application.config.assets.precompile << /\.(?:png)\z/
Rails.application.config.assets.precompile << /\.(?:jpg)\z/