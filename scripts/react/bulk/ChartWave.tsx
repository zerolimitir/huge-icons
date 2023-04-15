import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChartWave = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M1.807 1.289c-.249.053-.465.281-.523.549-.06.279-.062 15.016-.002 15.599.236 2.302 1.979 4.045 4.281 4.281.584.06 16.319.058 16.599-.002a.65.65 0 0 0 .358-.196c.409-.409.205-1.115-.358-1.236-.146-.031-2.566-.044-8.394-.044-8.011-.001-8.195-.002-8.517-.079a3.128 3.128 0 0 1-1.593-.926c-.439-.462-.676-.891-.819-1.486-.077-.321-.078-.505-.08-8.029-.001-5.147-.015-7.759-.042-7.879-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartWave);
export default ForwardRef;
