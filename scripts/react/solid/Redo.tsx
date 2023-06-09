import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRedo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.34 2.28c-1.879.119-3.691.799-5.256 1.972-.501.375-1.468 1.344-1.839 1.84a9.906 9.906 0 0 0-1.892 4.48c-.114.705-.123 2.019-.02 2.728a9.962 9.962 0 0 0 1.912 4.608c.377.504 1.343 1.47 1.847 1.847a9.95 9.95 0 0 0 4.608 1.911c.333.048.732.07 1.3.07 1.556 0 2.894-.306 4.26-.974 1.052-.515 1.77-1.03 2.621-1.881s1.367-1.57 1.88-2.621c.556-1.136.857-2.258.965-3.597.068-.834.009-1.066-.326-1.288-.133-.087-.21-.108-.403-.108-.2 0-.267.019-.406.117-.278.195-.319.304-.357.965-.076 1.324-.367 2.408-.934 3.48-1.449 2.739-4.213 4.409-7.3 4.409a8.12 8.12 0 0 1-5.702-2.286c-1.292-1.235-2.13-2.829-2.445-4.652-.097-.562-.097-2.038 0-2.6.315-1.82 1.153-3.417 2.44-4.648C7.515 4.885 8.989 4.149 10.7 3.853c.562-.097 2.038-.097 2.6 0 1.837.318 3.434 1.162 4.676 2.47l.396.417-1.616.02c-1.802.022-1.762.016-1.984.307-.099.129-.112.181-.112.436 0 .263.011.303.121.439.254.314.106.298 2.79.298 1.918 0 2.417-.011 2.521-.054.171-.071.373-.307.426-.495.061-.22.057-4.636-.004-4.88-.139-.551-.874-.74-1.262-.324-.2.213-.212.306-.212 1.581v1.19l-.29-.283c-1.936-1.887-4.639-2.87-7.41-2.695'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRedo);
export default ForwardRef;
