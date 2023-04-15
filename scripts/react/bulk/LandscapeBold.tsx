import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLandscapeBold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 2.278a.883.883 0 0 0-.481.374c-.064.117-.071.32-.082 2.268-.009 1.455.001 2.187.031 2.288.089.304.412.55.721.55s.632-.246.721-.55c.03-.101.04-.833.031-2.288-.012-2.073-.015-2.144-.094-2.279a.807.807 0 0 0-.847-.363M11.7 16.316a.734.734 0 0 0-.398.413c-.053.128-.062.442-.062 2.24 0 1.315.016 2.146.042 2.24.108.39.52.618.92.51.22-.059.454-.287.513-.5.03-.107.044-.848.044-2.259-.001-1.956-.006-2.111-.075-2.26-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLandscapeBold);
export default ForwardRef;
