import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChartArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M1.815 1.278a.792.792 0 0 0-.462.353l-.093.149v8.36c0 7.924.004 8.379.073 8.72.39 1.929 1.776 3.347 3.703 3.789l.384.088 8.258.013c5.981.009 8.317 0 8.474-.032.675-.141.797-1.076.18-1.382-.147-.074-.416-.077-8.572-.096l-8.42-.02-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32-.02-8.42c-.019-8.156-.022-8.425-.096-8.572a.76.76 0 0 0-.484-.384c-.177-.048-.187-.048-.365-.006m5 8a.792.792 0 0 0-.459.348c-.121.197-.124.548-.005.738.142.228 2.927 2.974 3.169 3.124a2.763 2.763 0 0 0 2.96-.001c.121-.076.58-.492 1.02-.925.44-.432.866-.817.947-.855a1.33 1.33 0 0 1 1.106-.001c.088.041.64.557 1.379 1.291l1.231 1.223-.431.024c-.464.025-.597.07-.779.262a.742.742 0 0 0-.139.786c.065.155.305.375.457.417.202.057 1.969.037 2.189-.025a1.841 1.841 0 0 0 1.212-1.179c.098-.306.099-2.149.002-2.325-.149-.269-.391-.42-.674-.42a.667.667 0 0 0-.494.193c-.196.185-.238.314-.258.78l-.019.434-1.264-1.259c-.747-.744-1.355-1.315-1.485-1.396a2.767 2.767 0 0 0-2.96 0c-.121.077-.58.493-1.02.926-.44.432-.866.817-.947.855a1.327 1.327 0 0 1-1.106 0c-.089-.04-.724-.639-1.607-1.514-1.349-1.337-1.474-1.451-1.648-1.493-.206-.051-.199-.05-.377-.008'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartArrowDown);
export default ForwardRef;
