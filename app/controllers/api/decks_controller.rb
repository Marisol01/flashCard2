class Api::DecksController < ApplicationController
    before_action :authenticate_user!
    
        def index
          render json: current_user.decks.all
        end
      
        def create
          deck = current_user.decks.new(deck_params)
          if deck.save
            render json: deck
          else
            render json: { errors: deck.errors }, status: :unprocessable_entity 
          end
        end
      
        def update
          deck = current_user.decks.find(params[:id])
           if deck.update(deck_params)
          render json: deck
           else
            render json: { errors: deck.errors }, status: :unprocessable_entity 
           end
        end
      
        def destroy
          current_user.decks.find(params[:id]).destroy
          render json: { message: 'Deck deleted' }
        end
      
        private
      
        def deck_params
          params.require(:deck).permit(:name)
        end
      
end
