var arr1 = []
var arr2 = []
var arr3 = []
var arr4 = []
var arr5 = []
var arr6 = []

//�����l�̐ݒ�
function TypingInit() {
	$('.js_typing_title').each(function (i) { //js_typing�N���X��S�ď����������Ȃ�
		arr1[i] = new ShuffleText(this);//���삳����e�L�X�g��z��Ɋi�[
	});

	$('.js_typing_Profile').each(function (i) { //js_typing�N���X��S�ď����������Ȃ�
		arr2[i] = new ShuffleText(this);//���삳����e�L�X�g��z��Ɋi�[
	});

	$('.js_typing_Biography').each(function (i) { //js_typing�N���X��S�ď����������Ȃ�
		arr3[i] = new ShuffleText(this);//���삳����e�L�X�g��z��Ɋi�[
	});
	$('.js_typing_ProfileText').each(function (i) { //js_typing�N���X��S�ď����������Ȃ�
		arr4[i] = new ShuffleText(this);//���삳����e�L�X�g��z��Ɋi�[
	});
	$('.js_typing_works').each(function (i) { //js_typing�N���X��S�ď����������Ȃ�
		arr5[i] = new ShuffleText(this);//���삳����e�L�X�g��z��Ɋi�[
	});
	$('.js_typing_form').each(function (i) { //js_typing�N���X��S�ď����������Ȃ�
		arr6[i] = new ShuffleText(this);//���삳����e�L�X�g��z��Ɋi�[
	});

}


////�X�N���[�������ۂ̃A�j���[�V�����̐ݒ�
function TypingAnime_title() {
	$(".js_typing_title").each(function (i) {

			arr1[i].start();//�z��œo�^�e�L�X�g�̃A�j���[�V�����������Ȃ�
			arr1[i].duration = 1000;//�e�L�X�g���ŏI�ω�����܂ł̎��ԁ��K��l600
			$(this).addClass("endAnime");//�P�x�A�j���[�V���������ꍇ��endAnime�N���X��ǉ�
	});
}

function TypingAnime_Profile() {

	$(".js_typing_Profile").each(function (i) {

		arr2[i].start();//�z��œo�^�e�L�X�g�̃A�j���[�V�����������Ȃ�
		arr2[i].duration = 600;//�e�L�X�g���ŏI�ω�����܂ł̎��ԁ��K��l600
		$(this).addClass("endAnime");//�P�x�A�j���[�V���������ꍇ��endAnime�N���X��ǉ�
	});
}

function TypingAnime_ProfileText() {

	$(".js_typing_ProfileText").each(function (i) {

		arr4[i].start();//�z��œo�^�e�L�X�g�̃A�j���[�V�����������Ȃ�
		arr4[i].duration = i * 200;//�e�L�X�g���ŏI�ω�����܂ł̎��ԁ��K��l600
		$(this).addClass("endAnime");//�P�x�A�j���[�V���������ꍇ��endAnime�N���X��ǉ�
	});
}


function TypingAnime_Biography() {

	$(".js_typing_Biography").each(function (i) {

		arr3[i].start();//�z��œo�^�e�L�X�g�̃A�j���[�V�����������Ȃ�
		arr3[i].duration = i * 200;//�e�L�X�g���ŏI�ω�����܂ł̎��ԁ��K��l600
		$(this).addClass("endAnime");//�P�x�A�j���[�V���������ꍇ��endAnime�N���X��ǉ�
	});
}

function TypingAnime_works() {

	$(".js_typing_works").each(function (i) {

		arr5[i].start();//�z��œo�^�e�L�X�g�̃A�j���[�V�����������Ȃ�
		arr5[i].duration = 600;//�e�L�X�g���ŏI�ω�����܂ł̎��ԁ��K��l600
		$(this).addClass("endAnime");//�P�x�A�j���[�V���������ꍇ��endAnime�N���X��ǉ�
	});
}


function TypingAnime_form() {

	$(".js_typing_form").each(function (i) {

		arr6[i].start();//�z��œo�^�e�L�X�g�̃A�j���[�V�����������Ȃ�
		arr6[i].duration = 600;//�e�L�X�g���ŏI�ω�����܂ł̎��ԁ��K��l600
		$(this).addClass("endAnime");//�P�x�A�j���[�V���������ꍇ��endAnime�N���X��ǉ�
	});
}

$(function () {
	$('.js_typing_title').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		TypingAnime_title();
});

	$('.js_typing_P').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		TypingAnime_Profile();
	});

	$('.js_typing_PT').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		TypingAnime_ProfileText();
	});


	$('.js_typing_B').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		TypingAnime_Biography();
	});

	$('.js_typing_w').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		TypingAnime_works();
	});

	$('.js_typing_f').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		TypingAnime_form();
	});

});


// ��ʂ��X�N���[���������瓮���������ꍇ�̋L�q
$(window).scroll(function () {
	TypingAnime();/* �A�j���[�V�����p�̊֐����Ă�*/
});// �����܂ŉ�ʂ��X�N���[���������瓮���������ꍇ�̋L�q

// ��ʂ��ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q
$(window).on('load', function () {
	TypingInit(); //�����ݒ�
	TypingAnime();/* �A�j���[�V�����p�̊֐����Ă�*/
});// �����܂ŉ�ʂ��ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q

