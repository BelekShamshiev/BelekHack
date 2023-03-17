import React from 'react';
import './Main.css'
import { Input } from 'antd';

const Main = () => {
	return (
		<div class="Aviato">
			<div className="modal">
				<header>
					<h1>Shampik</h1>
				</header>
				<h1>Конвертируй PNR в понятный вид для пассажира</h1>
				<p>
					Вставь PNR из любой GDS,мы сконвертируем его в понятный вид для
					пассажира. Конвертируй варианты за секунды.Экономь свое время{" "}
				</p>
				<div className="text">
					<ol className="ol">
						<li>1 TS 275 J 15OCT 4 LGWYVR HK1 1010 1200 332 E 0</li>
						<li>2 AC8097 Y 15OCT 4 YVRSEA HK1 1335 1435 DH4 E 0</li>
						<li>3 AS2254 F 17OCT 6 SEAPDX HK1 1700 1753 E75 E 0</li>
						<li>4 AA7007 J 17OCT 6 PDXLHR HK1 1845 1210+1 788 E 0</li>
					</ol>
					<ul className="ul">
						<li>
							15 окт., 10:10 – 12:00, Лондон (Гатвик) — Ванкувер, TS 275, Air
							Transat
						</li>
						<li>
							15 окт., 13:35 – 14:35, Ванкувер — Сиэтл (Такома), AC 8097, Air
							Canada
						</li>
						<li>
							17 окт., 17:00 – 17:53, Сиэтл (Такома) — Портленд, AS 2254, Alaska
							Airlines
						</li>
						<li>
							17 окт., 18:45 – 12:10, Портленд — Лондон (Хитроу), AA 7007,
							American Airlines
						</li>
					</ul>
				</div>
				<div className="input_field">
					<p>Вариант 1</p>
					<Input placeholder="Вставьте PNR из любой GDS " />
				</div>
			</div>
		</div>
	);
};

export default Main;