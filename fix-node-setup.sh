#!/bin/bash

# Required Node & npm versions
REQUIRED_NODE_VERSION="22.12.0"
REQUIRED_NPM_VERSION="10.9.0"

echo "🔧 Fixing Node.js, npm, and dependencies..."

# Check if NVM is installed
if ! command -v nvm &> /dev/null; then
    echo "⚠️  NVM is not installed. Installing now..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash

    # Load NVM
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi

# Use correct Node.js version
echo "🔄 Installing and using Node.js $REQUIRED_NODE_VERSION..."
nvm install $REQUIRED_NODE_VERSION
nvm use $REQUIRED_NODE_VERSION
nvm alias default $REQUIRED_NODE_VERSION

# Upgrade npm
echo "⬆️  Upgrading npm to the latest version..."
npm install -g npm@latest

# Verify versions
echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"

# Remove old dependencies and clean cache
echo "🗑  Cleaning up old dependencies..."
rm -rf node_modules package-lock.json
npm cache clean --force

# Reinstall dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🚀 Running build..."
npm run build || npx react-scripts build

echo "✅ All done! Try running your project now."
