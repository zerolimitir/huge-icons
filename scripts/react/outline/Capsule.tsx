import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCapsule = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.855 2.382c-.749.109-1.338.297-2.075.662-1.017.503-.964.455-4.685 4.174-2.979 2.977-3.398 3.41-3.654 3.782a7.243 7.243 0 0 0-1.127 2.68c-.134.662-.133 1.85 0 2.52a7.271 7.271 0 0 0 1.157 2.72c.343.487 1.122 1.266 1.609 1.609.784.553 1.74.96 2.72 1.157.394.08.577.093 1.28.091.733-.001.874-.013 1.327-.109a7.135 7.135 0 0 0 2.553-1.08c.381-.255.73-.591 3.784-3.645 3.699-3.697 3.699-3.697 4.197-4.681a6.856 6.856 0 0 0 .519-4.823c-.687-2.677-2.973-4.693-5.739-5.061a8.312 8.312 0 0 0-1.866.004m1.665 1.476a5.353 5.353 0 0 1 3.606 2.115 5.509 5.509 0 0 1 1.072 3.207 5.83 5.83 0 0 1-.464 2.159c-.349.795-.639 1.153-2.171 2.681l-1.243 1.24-3.79-3.791-3.79-3.79 1.34-1.334c.737-.733 1.439-1.404 1.56-1.491 1.156-.832 2.513-1.18 3.88-.996m1.1 2.528c-.3.159-.449.439-.405.76.025.186.109.327.371.623.333.377.515.956.481 1.531-.034.563-.189.935-.583 1.398-.237.277-.303.445-.27.686a.743.743 0 0 0 1.005.599c.416-.159.993-1.027 1.229-1.847.077-.268.09-.412.091-.956.001-.692-.054-.984-.289-1.52-.233-.532-.73-1.172-.999-1.286-.171-.072-.482-.066-.631.012m-5.14 6.155 3.78 3.781-1.44 1.432c-1.519 1.511-1.721 1.68-2.4 2.004-.824.394-1.451.536-2.36.536-.752 0-1.226-.084-1.9-.338a5.415 5.415 0 0 1-2.924-2.666 5.073 5.073 0 0 1-.531-2.37c.002-.89.148-1.526.537-2.34.323-.677.495-.882 1.993-2.39a67.612 67.612 0 0 1 1.443-1.43c.012 0 1.723 1.701 3.802 3.781'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCapsule);
export default ForwardRef;