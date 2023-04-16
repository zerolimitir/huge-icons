import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapPaper = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M7.98 3.283c-1.293.129-2.822.792-4.64 2.01-1.161.778-1.541 1.125-1.795 1.64-.303.615-.281.19-.296 5.767-.009 3.338.001 5.105.029 5.316.069.518.316.935.726 1.223.344.242.599.328 1.036.35.515.027.714-.046 1.529-.559 1.257-.79 2.496-1.339 3.322-1.471a3.31 3.31 0 0 1 1.509.119c.603.201.968.424 2.247 1.369 1.155.853 1.709 1.182 2.402 1.427 1.809.638 3.826.099 6.611-1.767 1.161-.778 1.541-1.125 1.795-1.64.303-.615.281-.19.296-5.767.009-3.338-.001-5.105-.029-5.316a1.719 1.719 0 0 0-.726-1.223c-.344-.242-.599-.328-1.036-.35-.515-.027-.714.046-1.529.559-1.257.79-2.496 1.339-3.322 1.471a3.31 3.31 0 0 1-1.509-.119c-.605-.202-.967-.423-2.26-1.378-1.157-.855-1.689-1.171-2.389-1.418a4.783 4.783 0 0 0-1.971-.243M9.3 4.887c.592.17 1.131.488 2.26 1.334 1.513 1.133 2.356 1.564 3.338 1.706l.342.049v11.262l-.13-.022c-.746-.127-1.368-.462-2.67-1.437-1.513-1.133-2.356-1.564-3.338-1.706l-.342-.049V4.762l.13.022c.071.012.256.059.41.103m-2.06 5.674c0 4.447-.01 5.604-.05 5.615-1.071.288-2.288.86-3.506 1.649-.251.162-.499.295-.552.295-.125 0-.316-.1-.347-.182-.014-.035-.025-2.306-.025-5.047 0-3.733.012-5.022.048-5.14a1.15 1.15 0 0 1 .215-.346c.358-.398 1.838-1.369 2.877-1.887.54-.269 1.199-.549 1.31-.556.016-.001.03 2.519.03 5.599m13.837-4.622c.062.032.124.087.138.123.014.035.025 2.306.025 5.047 0 3.733-.012 5.022-.048 5.14-.068.23-.319.487-.838.859-1.175.844-2.688 1.669-3.504 1.911l-.09.026v-5.604c0-4.449.01-5.606.05-5.617 1.071-.288 2.288-.86 3.506-1.649.472-.305.57-.336.761-.236'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapPaper);
export default ForwardRef;