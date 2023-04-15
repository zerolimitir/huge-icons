import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBarChartArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M1.785 1.289c-.218.058-.441.293-.5.527-.083.332.078.7.368.838.075.036.459.111.852.167 3.645.519 6.13 1.234 8.768 2.52 2.389 1.166 4.963 2.857 8.11 5.33l.699.549-.631.022c-.5.017-.663.037-.783.095-.611.297-.496 1.236.17 1.379.263.056 2.094.058 2.439.002.37-.06.666-.215.946-.495.28-.28.435-.576.495-.946.056-.345.054-2.176-.002-2.439-.163-.758-1.269-.758-1.432 0a5.586 5.586 0 0 0-.044.784c0 .318-.01.578-.021.578-.012 0-.314-.231-.67-.513-6.304-4.985-10.454-7.066-16.09-8.067-.653-.116-2.469-.388-2.506-.376l-.168.045'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartArrowDown);
export default ForwardRef;
