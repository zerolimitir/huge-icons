import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSignalCellular = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.374 3.297a2.84 2.84 0 0 0-1.336.598c-.551.43-13.952 12.066-14.133 12.27-.216.245-.474.742-.569 1.095-.083.31-.081.995.005 1.319.147.558.432 1.041.822 1.394a2.824 2.824 0 0 0 1.684.746c.481.051 13.841.053 14.321.003 1-.105 1.857-.695 2.286-1.574.099-.202.203-.458.231-.568.063-.25.101-12.131.04-12.74-.104-1.052-.704-1.887-1.67-2.325-.497-.226-1.176-.314-1.681-.218m1.086 1.596c.291.135.511.339.653.607l.107.2.01 6.254.011 6.254-.107.238c-.121.27-.387.534-.685.681l-.189.093H4.74l-.228-.112a1.317 1.317 0 0 1-.744-1.248c.018-.35.129-.582.407-.851A3574.26 3574.26 0 0 1 17.989 5.044c.384-.309.996-.371 1.471-.151'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignalCellular);
export default ForwardRef;
