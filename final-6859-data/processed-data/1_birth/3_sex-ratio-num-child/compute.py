ratios = [1.1373, 1.2843, 1.6156]

for ratio in ratios:
	# ratio = 1.6156
	num_girl_ideal = ratio / 1.05
	missing_girl = num_girl_ideal - 1
	total = num_girl_ideal + ratio

	missing_girl_ratio = missing_girl / total
	boy_ratio = ratio / total
	girl_ratio = 1 / total

	missing = missing_girl_ratio / (missing_girl_ratio + girl_ratio)

	print(missing)

# print(missing_girl_ratio)
# print(boy_ratio)
# print(girl_ratio)





# ratio = 1.6156
# girl = 1/(ratio + 1)
# boy = ratio / (ratio+1)
# print(girl)
# print(boy)