require 'test_helper'

class HeadphonesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @headphone = headphones(:one)
  end

  test "should get index" do
    get headphones_url, as: :json
    assert_response :success
  end

  test "should create headphone" do
    assert_difference('Headphone.count') do
      post headphones_url, params: { headphone: { name: @headphone.name } }, as: :json
    end

    assert_response 201
  end

  test "should show headphone" do
    get headphone_url(@headphone), as: :json
    assert_response :success
  end

  test "should update headphone" do
    patch headphone_url(@headphone), params: { headphone: { name: @headphone.name } }, as: :json
    assert_response 200
  end

  test "should destroy headphone" do
    assert_difference('Headphone.count', -1) do
      delete headphone_url(@headphone), as: :json
    end

    assert_response 204
  end
end
