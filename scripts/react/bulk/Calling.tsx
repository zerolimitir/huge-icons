import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCalling = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.807 2.288c-.49.108-.705.759-.387 1.176.16.209.328.261.963.299a7.213 7.213 0 0 1 4.739 2.115 7.213 7.213 0 0 1 2.115 4.739c.024.405.054.615.104.72.207.436.83.532 1.179.183.209-.209.244-.399.198-1.08-.128-1.918-.82-3.628-2.069-5.12-1.174-1.403-2.954-2.469-4.769-2.856-.759-.162-1.757-.247-2.073-.176m0 3.999c-.532.121-.722.838-.327 1.233.164.164.4.24.752.24.259.001.793.134 1.111.278a3.445 3.445 0 0 1 1.621 1.625c.142.313.275.848.276 1.105 0 .103.02.281.044.394.121.563.827.767 1.236.358.207-.207.253-.429.198-.961-.112-1.088-.546-2.046-1.277-2.815a4.686 4.686 0 0 0-2.561-1.398c-.474-.084-.87-.106-1.073-.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCalling);
export default ForwardRef;
