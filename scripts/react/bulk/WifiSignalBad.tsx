import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWifiSignalBad = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.7 13.316c-.38.175-.551.586-.399.955.04.096.363.451.91.999l.847.849-.865.871c-.751.754-.872.893-.913 1.046a.725.725 0 0 0 .716.924c.109 0 .249-.019.311-.043.062-.023.496-.423.963-.889l.851-.846.829.825c.457.454.888.854.958.889.188.094.508.082.7-.026.312-.175.45-.637.288-.962-.035-.07-.435-.501-.89-.958l-.825-.83.825-.83c.455-.457.855-.888.89-.958.079-.158.083-.499.008-.644a.898.898 0 0 0-.397-.365.903.903 0 0 0-.599.021c-.07.035-.502.435-.958.89l-.83.825-.85-.848c-.548-.547-.903-.87-.999-.91a.668.668 0 0 0-.571.015'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiSignalBad);
export default ForwardRef;
