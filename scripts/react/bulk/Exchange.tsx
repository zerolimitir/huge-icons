import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgExchange = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M19.823 10.287a.728.728 0 0 0-.486.381c-.063.129-.078.293-.099 1.092-.021.779-.04.996-.112 1.267-.403 1.526-1.52 2.652-3.078 3.101l-.308.089-5.96.021c-5.741.021-5.966.025-6.112.098a.75.75 0 0 0-.384.852c.043.181.144.29 1.691 1.838 1.572 1.573 1.653 1.648 1.835 1.685.581.12 1.022-.322.9-.901-.037-.177-.102-.253-.961-1.118l-.921-.928 4.916-.015c5.359-.017 5.062-.004 5.916-.249.471-.134 1.229-.508 1.678-.826 1.208-.856 2.06-2.218 2.325-3.713.083-.469.122-1.797.061-2.079-.097-.452-.463-.694-.901-.595'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgExchange);
export default ForwardRef;
