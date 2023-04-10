import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBriefcaseTriangularTwoLocks = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.002 3.125a2.25 2.25 0 0 0-2.25 2.25v1a.75.75 0 0 1-1.5 0v-1a3.75 3.75 0 0 1 3.75-3.75h2a3.75 3.75 0 0 1 3.75 3.75v1a.75.75 0 0 1-1.5 0v-1a2.25 2.25 0 0 0-2.25-2.25h-2Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M18.002 6.375h-12a4 4 0 0 0-3.994 3.77.418.418 0 0 0 .176.368c.443.314 1.717 1.103 4.062 1.698.16.04.318-.06.389-.208a1.5 1.5 0 0 1 2.856.642.15.15 0 0 0 .134.15c.288.028.585.054.89.075l2.98.062c.282-.01.557-.024.823-.042a.199.199 0 0 0 .185-.198v-.047a1.5 1.5 0 0 1 2.902-.536c.063.165.23.282.4.238 2.356-.605 3.62-1.497 4.038-1.835a.416.416 0 0 0 .153-.347 4 4 0 0 0-3.994-3.79Z'
        />
        <path
            fill='currentColor'
            d='M9.473 14.263c.019-.119.124-.213.243-.198 1.497.18 3.054.241 4.6.144a.223.223 0 0 1 .226.178 1.5 1.5 0 0 0 2.961-.342V14c0-.14.097-.261.233-.294a15.267 15.267 0 0 0 3.648-1.365c.275-.147.618.047.618.359v5.675a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4l-.004-5.83c0-.298.313-.492.584-.371 1.06.474 2.31.906 3.68 1.251a.302.302 0 0 1 .229.293v.327a1.5 1.5 0 0 0 1.5 1.5c.746 0 1.372-.565 1.482-1.282Z'
        />
        <rect width={1.5} height={2.794} x={7.241} y={11.948} fill='currentColor' rx={0.75} />
        <rect width={1.5} height={2.794} x={15.253} y={11.948} fill='currentColor' rx={0.75} />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseTriangularTwoLocks);
export default ForwardRef;
