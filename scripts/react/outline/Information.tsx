import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgInformation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.31 1.283C6.564 1.568 2.534 5.02 1.505 9.68c-.189.859-.241 1.353-.241 2.32 0 1.526.255 2.795.841 4.195 1.327 3.167 4.197 5.554 7.575 6.3.859.189 1.353.241 2.32.241 1.526 0 2.795-.255 4.195-.841 2.527-1.059 4.641-3.173 5.7-5.7.586-1.4.841-2.669.841-4.195 0-1.526-.255-2.795-.841-4.195-1.418-3.385-4.59-5.857-8.238-6.422-.354-.055-1.615-.152-1.777-.137-.033.003-.29.02-.57.037m2.09 1.576a9.28 9.28 0 0 1 7.747 7.781c.099.642.099 2.078 0 2.72-.463 3.008-2.356 5.605-5.047 6.921a9.193 9.193 0 0 1-2.693.867c-.607.102-2.207.102-2.814 0a9.193 9.193 0 0 1-2.693-.867 8.573 8.573 0 0 1-2.374-1.692 9.232 9.232 0 0 1-2.674-5.229c-.099-.642-.099-2.078 0-2.72A9.287 9.287 0 0 1 8.64 3.386c.737-.291 1.519-.475 2.56-.601.314-.039 1.798.011 2.2.074m-1.733 3.206C11.303 6.177 11 6.602 11 7c0 .517.483 1 1 1s1-.483 1-1c0-.402-.312-.827-.69-.939a.941.941 0 0 0-.643.004m-.856 3.212c-.167.042-.395.216-.468.356-.279.541.108 1.126.747 1.127h.15v3.15c0 2.175.014 3.199.045 3.309a.84.84 0 0 0 .191.306.742.742 0 0 0 1.244-.324c.028-.105.038-1.35.031-3.788-.011-3.579-.012-3.635-.093-3.772a1.03 1.03 0 0 0-.253-.26l-.172-.121-.646-.008c-.356-.004-.705.007-.776.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInformation);
export default ForwardRef;
