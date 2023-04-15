import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCubeStack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.169 4.578c-.586.293-.691.36-.792.506-.098.142-.117.208-.117.413.001.446.302.743.754.743h.226v2h-.181a.786.786 0 0 0-.743.46c-.179.386.004.827.413.998.219.091 2.323.091 2.542 0a.734.734 0 0 0 .413-.398c.234-.505-.155-1.06-.743-1.06h-.181l-.001-1.69c-.001-1.557-.007-1.703-.075-1.85a.734.734 0 0 0-.413-.398c-.269-.112-.383-.084-1.102.276M3.58 12.047c-.721.138-1.381.801-1.536 1.545-.061.295-.061 6.521 0 6.816.157.75.798 1.391 1.548 1.548.295.061 6.521.061 6.816 0a2.062 2.062 0 0 0 1.548-1.548c.061-.295.061-6.521 0-6.816-.159-.762-.818-1.411-1.573-1.549-.302-.055-6.512-.051-6.803.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCubeStack);
export default ForwardRef;
