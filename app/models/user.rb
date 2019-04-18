# frozen_string_literal: true

class User < ActiveRecord::Base
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :liked_cards, Array

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
   Card.where("id IN (?)", ids)
  end

end