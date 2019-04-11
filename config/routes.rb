Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
<<<<<<< HEAD

=======
>>>>>>> Added style for nav bar and to card
    root 'api/decks#index'

  namespace :api do
    resources :decks
    resources :cards
    resources :decks
  end
end
