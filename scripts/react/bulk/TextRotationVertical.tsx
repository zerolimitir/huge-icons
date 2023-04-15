import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTextRotationVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.785 4.288c-.36.098-.226-.191-2.98 6.428-2.515 6.045-2.534 6.093-2.517 6.324.013.177.044.268.13.381.307.403.954.382 1.208-.039.04-.067.4-.905.799-1.862l.727-1.74h5.696l.733 1.76c.403.968.772 1.818.82 1.888.18.266.582.361.904.215a.675.675 0 0 0 .407-.603c.017-.231-.001-.277-2.512-6.306-1.391-3.341-2.571-6.13-2.622-6.198-.165-.22-.505-.326-.793-.248m1.317 5.297 1.091 2.62c.008.02-.957.035-2.193.035-1.236 0-2.201-.015-2.193-.035C12.974 11.769 14.983 7 15 7c.013 0 .509 1.163 1.102 2.585'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTextRotationVertical);
export default ForwardRef;
