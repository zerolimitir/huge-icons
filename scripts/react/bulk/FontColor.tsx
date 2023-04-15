import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFontColor = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.785 3.288c-.36.098-.226-.19-2.975 6.417-2.672 6.421-2.606 6.248-2.487 6.562.095.252.398.453.683.453.219 0 .483-.13.593-.292.048-.07.417-.92.82-1.888l.733-1.76h5.696l.733 1.76c.403.968.772 1.818.82 1.888.18.266.582.361.904.215a.675.675 0 0 0 .407-.603c.017-.231-.001-.277-2.512-6.306-1.391-3.341-2.571-6.13-2.622-6.198-.165-.22-.505-.326-.793-.248m1.317 5.297 1.091 2.62c.008.02-.957.035-2.193.035-1.236 0-2.201-.015-2.193-.035C9.974 10.769 11.983 6 12 6c.013 0 .509 1.163 1.102 2.585'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFontColor);
export default ForwardRef;
