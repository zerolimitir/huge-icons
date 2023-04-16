import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSmartMusic = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.4 1.283a6.79 6.79 0 0 0-3.72 1.539c-.579.484-.68.628-.68.962 0 .306.167.556.45.674.331.139.597.057.976-.298a5.442 5.442 0 0 1 2.534-1.307c.472-.101 1.604-.102 2.068-.002a5.468 5.468 0 0 1 2.548 1.308c.291.264.467.361.657.361.399 0 .767-.355.767-.74 0-.309-.141-.507-.68-.958a6.75 6.75 0 0 0-3.788-1.542c-.522-.043-.584-.043-1.132.003m.155 2.996a4.06 4.06 0 0 0-1.688.636c-.335.231-.619.521-.689.705-.212.555.314 1.138.889.983a1.27 1.27 0 0 0 .375-.228c.29-.248.475-.362.793-.487.235-.092.321-.104.765-.104s.53.012.765.104c.318.126.546.265.774.475.292.27.589.342.891.215a.643.643 0 0 0 .379-.355.777.777 0 0 0-.065-.761c-.32-.42-1.144-.916-1.796-1.081-.423-.106-1.009-.149-1.393-.102m.153 4.779c-2.217.446-4.073.83-4.125.853-.157.072-.383.293-.475.465l-.088.164-.011 3.766-.011 3.765-.149-.034c-.697-.162-1.579.209-2.003.843-.433.648-.451 1.535-.046 2.174a2.055 2.055 0 0 0 1.86.934c.921-.069 1.665-.771 1.819-1.717.025-.155.041-1.455.041-3.411v-3.161l3.37-.673c1.853-.37 3.419-.683 3.48-.694l.11-.021v3.725l-.33-.023c-.594-.042-1.119.157-1.554.586-.796.788-.796 2.01 0 2.804a1.964 1.964 0 0 0 1.812.553 2.062 2.062 0 0 0 1.548-1.548c.031-.148.044-1.604.044-4.8l-.001-4.588-.093-.2a1.146 1.146 0 0 0-.532-.525 1.221 1.221 0 0 0-.383-.051c-.153.002-1.826.32-4.283.814'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartMusic);
export default ForwardRef;