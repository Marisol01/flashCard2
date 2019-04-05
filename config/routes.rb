Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
    root 'api/decks#index'

  namespace :api do
    resources :cards
    resources :decks
  end
end
