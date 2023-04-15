import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMouse = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 1.278a.883.883 0 0 0-.481.374c-.064.117-.071.32-.082 2.268-.009 1.455.001 2.187.031 2.288.089.304.412.55.721.55s.632-.246.721-.55c.03-.101.04-.833.031-2.288-.012-2.073-.015-2.144-.094-2.279a.807.807 0 0 0-.847-.363M11.7 7.316a.734.734 0 0 0-.398.413c-.091.219-.091 2.323 0 2.542a.748.748 0 0 0 1.396 0c.051-.122.062-.348.061-1.28-.001-1.014-.008-1.148-.075-1.291-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMouse);
export default ForwardRef;
