

////�X�N���[�������ۂ̃A�j���[�V�����̐ݒ�
function TypingAnime_title() {
	$("#parent").addClass("bgextend");
	$("#parent").addClass("bgLRextend");
	$("#co").addClass("bgappear");
}



$(function () {
	$('.js_typing_title').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		TypingAnime_title();
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

