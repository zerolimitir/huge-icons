import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCardRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.52 3.028c-.837.094-1.896.637-2.463 1.263a5.13 5.13 0 0 0-.716 1.089c-.093.211-.261.744-.261.829 0 .017 4.464.031 9.92.031 5.456 0 9.92-.012 9.92-.027 0-.08-.177-.642-.266-.842a5.151 5.151 0 0 0-.711-1.08c-.447-.494-1.266-.98-1.983-1.177l-.34-.093-6.48-.005c-3.564-.002-6.543.003-6.62.012M2 9v1.24h20V7.76H2V9m0 5.497c0 1.745.016 2.85.043 3.048.247 1.773 1.679 3.192 3.443 3.413.208.026 1.69.042 3.976.042 4.089 0 3.912.012 4.217-.283.279-.271.294-.336.324-1.417.03-1.047.069-1.278.316-1.87.37-.89 1.221-1.741 2.111-2.111.698-.291.703-.292 2.87-.316 2.197-.026 2.116-.015 2.417-.324.264-.272.283-.392.283-1.746V11.76H2v2.737m4.512 1.65c.63.387.642 1.299.023 1.692a.998.998 0 0 1-1.394-.336c-.107-.174-.121-.232-.121-.5 0-.259.016-.33.111-.492a.955.955 0 0 1 .941-.496.836.836 0 0 1 .44.132m9.855.539a.755.755 0 0 0-.365.899c.035.109.198.305.543.657l.493.502-.421.418c-.627.623-.751.849-.657 1.198.053.196.253.433.428.506a.813.813 0 0 0 .587-.006c.069-.033.351-.285.625-.56l.497-.499.484.479c.609.602.826.698 1.209.538a.708.708 0 0 0 .45-.678c0-.271-.105-.431-.617-.939l-.462-.459.516-.521c.422-.427.524-.552.562-.694a.744.744 0 0 0-.713-.927c-.278 0-.428.095-.941.598l-.489.48-.458-.464c-.256-.258-.529-.496-.618-.537a.735.735 0 0 0-.653.009'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardRemove);
export default ForwardRef;
