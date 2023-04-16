import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDonation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.58 3.047c-.721.138-1.381.801-1.536 1.545C13.014 4.735 13 5.686 13 7.5c0 1.814.014 2.765.044 2.908.157.75.798 1.391 1.548 1.548.294.061 5.522.061 5.816 0a2.062 2.062 0 0 0 1.548-1.548c.061-.294.061-5.522 0-5.816-.159-.762-.818-1.411-1.573-1.549-.3-.054-5.514-.051-5.803.004m4.24 2.279c.582.323.56 1.081-.04 1.358-.144.067-.274.074-1.28.074s-1.136-.007-1.28-.074c-.521-.241-.625-.866-.205-1.234a.747.747 0 0 1 .256-.153c.06-.013.127-.031.149-.039.022-.008.544-.011 1.16-.006.958.007 1.137.018 1.24.074M2 13.501v4.5l2.39 1.192c1.965.981 2.49 1.226 2.95 1.378a8.214 8.214 0 0 0 1.748.387c.55.06 9.032.058 9.32-.002a2.062 2.062 0 0 0 1.548-1.548c.203-.973-.35-1.948-1.302-2.297-.216-.079-.343-.088-1.634-.114-1.202-.025-1.455-.041-1.786-.113-.416-.091-1.111-.32-1.373-.453-.13-.067-2.769-1.727-2.814-1.771-.007-.006.042-.108.108-.226.519-.92.175-2.124-.744-2.605-.149-.078-1.654-.746-3.344-1.485L3.994 9H2v4.501'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDonation);
export default ForwardRef;