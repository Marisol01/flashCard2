Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
    root 'api/decks#index'

  namespace :api do
    resources :decks
    resources :cards
    get 'focused', to: 'cards#focused'
    put 'focuscard', to: 'cards#focuscard'
  end
end
