import React from 'react'

const ModalPage = () => {
  return (
    <div>
        <div class="modal fade" id="modalMoreDetails" tabindex="-1" aria-labelledby="modalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLongTitle">Product D</h5>
            </div>
            <hr />
            <div class="modal-body">
                <table class="table table-bordered">
                    <tr>
                        <th>ApplicantInformation</th>
                        <td>@Model.ApplicantInformation</td>
                    </tr>
                    <tr>
                        <th>PackSize</th>
                        <td>@Model.PackSize @Model.Unit</td>
                    </tr>
                    <tr>
                        <th>Product Name</th>
                        <td>@Model.ProductName</td>
                    </tr>
                    <tr>
                        <th>ManufacturerName</th>
                        <td>@Model.ManufacturerName</td>
                    </tr>
                    <tr>
                        <th>PackType</th>
                        <td>@Model.PackType</td>
                    </tr>
                    <tr>
                        <th>Ingredient</th>
                        <td>
                            @if (Model.Ingredients != null)
                            {
                                <p>@Model.Ingredients</p>
                            }
                            else
                            {
                                <p>No Ingredients available</p>
                            }
                        </td>
                    </tr>

                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
      
    </div>
  )
}

export default ModalPage

