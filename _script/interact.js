
$(function () {
	$('.RXimage').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		$(this).addClass("is-inview");//�P�x�A�j���[�V���������ꍇ��endAnime�N���X��ǉ�
});

	$('.LXimage').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		$(this).addClass("is-inview");//�P�x�A�j���[�V���������ꍇ��endAnime�N���X��ǉ�
	});

	$('.PYimage').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		$(this).addClass("is-inviewTitle");//�P�x�A�j���[�V���������ꍇ��endAnime�N���X��ǉ�
	});

	$('.PYimageText').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		$(this).addClass("is-inviewTitle");//�P�x�A�j���[�V���������ꍇ��endAnime�N���X��ǉ�
	});
});
