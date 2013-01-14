;(function(window){
	var d = document.createElement('div'),
		i = document.createElement('iframe'),
		c = document.createElement('div');
	i.setAttribute('width', '240');
	i.setAttribute('height', '310');
	i.style.cssText = ';border:none';
	i.setAttribute('src', 'http://yqtaku.github.com/jsbookmark/url2qr/bookmark.html');
	d.style.cssText = [
		'width:240px',
		'height:310px',
		'background:#fff',
		'box-shadow:0 0 10px #555',
		'border-left:1px solid #999',
		'border-bottom:1px solid #999',
		'position:fixed',
		'top:0',
		'right:0'
	].join(';');
	c.innerHTML = 'x';
	c.style.cssText = [
		'position:absolute',
		'left:-25px',
		'top:0px',
		'width:25px',
		'height:25px',
		'background:#fff',
		'font:15px/25px Arial, sans-serif',
		'text-align:center',
		'box-shadow:-2px 2px 3px #999',
		'color:#888',
		'cursor:pointer'
	].join(';');
	d.appendChild(i);
	d.appendChild(c);
	document.body.appendChild(d);
	c.onclick = function() {
		document.body.removeChild(d);
	}
})(window);
