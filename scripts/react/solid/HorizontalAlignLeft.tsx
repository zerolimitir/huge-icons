import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHorizontalAlignLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.811 1.278a.883.883 0 0 0-.481.374c-.066.121-.071.7-.08 10.263-.008 7.295.002 10.18.034 10.298a.8.8 0 0 0 .514.506c.4.108.812-.12.92-.51.024-.085.042-.594.042-1.179V20h3.718c2.56 0 3.784-.014 3.93-.044a2.062 2.062 0 0 0 1.548-1.548c.059-.283.059-2.533 0-2.816-.159-.762-.818-1.411-1.573-1.549-.16-.029-1.451-.043-3.93-.043H4.76v-4h6.718c4.75 0 6.78-.013 6.93-.044a2.062 2.062 0 0 0 1.548-1.548c.059-.283.059-2.533 0-2.816-.159-.762-.818-1.411-1.573-1.549-.165-.03-2.296-.043-6.928-.043h-6.69l-.013-1.11c-.011-1.034-.018-1.12-.094-1.249a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalAlignLeft);
export default ForwardRef;
