export function alert(message , name , iconName) {
    const alerts = document.querySelector('.alerts');
    let div = document.createElement('div');
    div.className = name;
    let icon = document.createElement('i');
    icon.className = iconName;
    let span = document.createElement('span');
    span.appendChild(document.createTextNode(message));
    div.appendChild(icon);
    div.appendChild(span);
    alerts.appendChild(div);
     setTimeout(()=> {
      div.remove();
    },1500);
}
