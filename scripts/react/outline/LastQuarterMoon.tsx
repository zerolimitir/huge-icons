import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLastQuarterMoon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.31 1.283C6.564 1.568 2.534 5.02 1.505 9.68c-.189.859-.241 1.353-.241 2.32 0 1.526.255 2.795.841 4.195 1.327 3.167 4.197 5.554 7.575 6.3.859.189 1.353.241 2.32.241 1.526 0 2.795-.255 4.195-.841 2.527-1.059 4.641-3.173 5.7-5.7.586-1.4.841-2.669.841-4.195 0-1.526-.255-2.795-.841-4.195-1.418-3.385-4.59-5.857-8.238-6.422-.354-.055-1.615-.152-1.777-.137-.033.003-.29.02-.57.037m2.09 1.576a9.28 9.28 0 0 1 7.747 7.781c.099.642.099 2.078 0 2.72-.463 3.008-2.356 5.605-5.047 6.921a9.193 9.193 0 0 1-2.693.867c-.607.102-2.207.102-2.814 0a9.193 9.193 0 0 1-2.693-.867 8.573 8.573 0 0 1-2.374-1.692 9.232 9.232 0 0 1-2.674-5.229c-.099-.642-.099-2.078 0-2.72A9.287 9.287 0 0 1 8.64 3.386c.737-.291 1.519-.475 2.56-.601.314-.039 1.798.011 2.2.074m-.68 2.253c1.582.536 2.802 2.577 3.187 5.328.098.702.098 2.418 0 3.12-.385 2.75-1.606 4.792-3.187 5.328l-.22.075.293-.022c.681-.051 1.537-.3 2.267-.659a6.873 6.873 0 0 0 3.221-3.222c.398-.809.604-1.565.686-2.51.159-1.832-.448-3.682-1.683-5.131-.948-1.113-2.339-1.935-3.811-2.254a6.116 6.116 0 0 0-.68-.106l-.293-.022.22.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLastQuarterMoon);
export default ForwardRef;
