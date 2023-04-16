import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLoudspeaker = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.433 2.042a4.334 4.334 0 0 0-1.702.67c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.422 1.511 1.576 2.591 3.1 2.901.405.083.48.084 4.9.073l4.489-.011.391-.108c1.505-.415 2.597-1.581 2.907-3.102.083-.407.083-.457.073-6.9l-.011-6.49-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.094 5.094 0 0 0-1.311-.599l-.338-.09-4.48-.007c-2.464-.004-4.582.008-4.707.026m5.087 3.057c.397.14.723.471.882.895.131.349.101.82-.073 1.175a1.512 1.512 0 0 1-.729.704c-.187.088-.276.103-.6.103-.324 0-.413-.015-.6-.103a1.512 1.512 0 0 1-.729-.704 1.569 1.569 0 0 1-.071-1.18 1.472 1.472 0 0 1 1.48-.971c.143.01.341.046.44.081m.438 6.021a4.186 4.186 0 0 1 1.865 1.057 4.211 4.211 0 0 1 1.064 1.885c.126.509.126 1.367 0 1.876a4.042 4.042 0 0 1-2.882 2.933c-.336.091-.463.104-1.005.104-.542 0-.669-.013-1.005-.104a4.021 4.021 0 0 1-2.283-1.602 4.86 4.86 0 0 1-.599-1.331c-.126-.509-.126-1.367 0-1.876.102-.408.357-.974.609-1.347.582-.862 1.615-1.5 2.711-1.675.35-.056 1.139-.014 1.525.08m-1.378 1.927C10.707 13.214 10 14.087 10 15c0 .92.69 1.768 1.592 1.956C12.816 17.211 14 16.249 14 15c0-.523-.21-1.017-.596-1.404-.491-.49-1.127-.682-1.824-.549'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLoudspeaker);
export default ForwardRef;