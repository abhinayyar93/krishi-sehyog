$(document).ready(function(){
	$('.navbar-toggle').click(function(){
		$(this).toggleClass('open');
		$('.navbar-header').toggleClass('open');
	});

	if($(this).width() < 767){
		$('.nav-link').removeClass('nav-buyer');
		$('.nav-link').removeClass('nav-seller');
	};

	// For Address proof button

	// To trigger click for input type=file for hidden tag

	$(document).on('click', '.custom-upload-address-button', function(){
		$('#upload-address-proof').trigger('click');
	});

	// To change the DOM for bringing the uploaded file name and remove button

	$(document).on('change', '#upload-address-proof', function(){
		var customUploadSection = $('.custom-upload-address-section'),
		filePath = $(this).val(),
		filePathName = getFileName(filePath);

		if( filePath && filePathName ) {
			customUploadSection.html('');
			var customUploadFile = $('<span class="custom-upload-address-file">');
			customUploadSection.append(customUploadFile.text(filePathName));	
			customUploadSection.append($('<i class="fa fa-remove fa-2x custom-fa"></i>'));
		}
	});

	// To revert back the DOM struture if remove button is hit to remove the uploaded file

	$(document).on('click', '.custom-upload-address-section .custom-fa', function() {
		var customUploadSection = $('.custom-upload-address-section');

		$('#upload-address-proof').val('');
		customUploadSection.html('');
		customUploadSection.append($('<span class="custom-upload-address-button">Upload a file  <i class="fa fa-upload"></i></span>'))
	});

	// For Identity Proof

	// To trigger click for input type=file for hidden tag

	$(document).on('click', '.custom-upload-identity-button', function(){
		$('#upload-identity-proof').trigger('click');
	});

	// To change the DOM for bringing the uploaded file name and remove button

	$(document).on('change', '#upload-identity-proof', function(){
		var customUploadSection = $('.custom-upload-identity-section'),
			filePath = $(this).val(),
			filePathName = getFileName(filePath);

		if( filePath && filePathName ) {
			customUploadSection.html('');
			var customUploadFile = $('<span class="custom-upload-identity-file">');
			customUploadSection.append(customUploadFile.text(filePathName));	
			customUploadSection.append($('<i class="fa fa-remove fa-2x custom-fa"></i>'));
		}
	});

	// To revert back the DOM struture if remove button is hit to remove the uploaded file

	$(document).on('click', '.custom-upload-identity-section .custom-fa', function() {
		var customUploadSection = $('.custom-upload-identity-section');

		$('#upload-identity-proof').val('');
		customUploadSection.html('');
		customUploadSection.append($('<span class="custom-upload-identity-button">Upload a file  <i class="fa fa-upload"></i></span>'))
	});	

});


function getFileName (path) {
	var fileArray = path.split('\\');

	if (fileArray.length <= 0) {
		return '';
	}

	var fileName = fileArray[fileArray.length - 1];
	if (fileName.length > 30) {
		fileName = fileName.slice(0,30) + '...';
	}

	return fileName;
}