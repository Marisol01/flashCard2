class Api::CardsController < ApplicationController
  def index
    render json: Card.all
  end

  def create
    card = Card.new(card_params)
    if card.save
      render json: card
    else
      render json: { errors: card.errors }, status: :unprocessable_entity
    end
  end

  def update
    card = Card.find(params[:id])
    # card.update( ) !card.complete )
    render json: card
  end

  def destroy  
    Card.find(params[:id]).destroy
    render json: { message: 'Card deleted' }
  end
  
  def focused
    render json: Card.where(focused: true)
  end

  def focusecard
    card = Card.find(params [:id])
    card.update(focused: !card.focused)
    render json: card
  end

  private

  def card_params
    params.require(:card).permit(:front, :back)
  end
end
