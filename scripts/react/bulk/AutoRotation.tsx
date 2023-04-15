import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAutoRotation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.007 5.686c-.539.266-.533 1.072.01 1.318.135.062.266.074.761.075l.599.001-1.643 1.65-1.643 1.65-.187.38c-.408.834-.408 1.644 0 2.48l.185.38 3.726 3.734c2.568 2.575 3.775 3.758 3.885 3.809.289.136.67.07.868-.15a.797.797 0 0 0 .13-.804c-.043-.105-1.163-1.253-3.755-3.849-4.108-4.116-3.845-3.815-3.841-4.382.002-.5.019-.522 1.777-2.278L8.44 8.14v.612c0 .529.011.632.079.766.258.506.955.531 1.284.045.096-.141.097-.155.109-1.24.011-.897.001-1.151-.052-1.387a1.707 1.707 0 0 0-1.238-1.274c-.188-.049-.474-.062-1.34-.062-1.046 0-1.111.004-1.275.086'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAutoRotation);
export default ForwardRef;
