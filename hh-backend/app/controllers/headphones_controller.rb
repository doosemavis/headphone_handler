class HeadphonesController < ApplicationController
  before_action :set_headphone, only: [:show, :update, :destroy]

  # GET /headphones
  def index
    @headphones = Headphone.all

    render json: @headphones
  end

  # GET /headphones/1
  def show
    render json: @headphone
  end

  # POST /headphones
  def create
    @headphone = Headphone.new(headphone_params)

    if @headphone.save
      render json: @headphone, status: :created, location: @headphone
    else
      render json: @headphone.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /headphones/1
  def update
    if @headphone.update(headphone_params)
      render json: @headphone
    else
      render json: @headphone.errors, status: :unprocessable_entity
    end
  end

  # DELETE /headphones/1
  def destroy
    @headphone.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_headphone
      @headphone = Headphone.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def headphone_params
      params.require(:headphone).permit(:name)
    end
end
